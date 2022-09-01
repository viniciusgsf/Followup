import React, { useCallback, useEffect, useMemo, useState } from "react";
import { FiClock } from "react-icons/fi";
import { isToday, format, parseISO, isAfter } from 'date-fns';
import { ptBR } from "date-fns/locale";
import DayPicker ,{ DayModifiers } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import SideBar from '../../assets/components/AuthSidebar';
import TopBar from "../../assets/components/topBar";

import {Container, SubContainer, Content, GridContainer, Topside, FollowupContainer, Schedule, NextAppointment, Section, Appointment, Calendar} from './styles';
import { useAuth } from "../../hooks/AuthContext";
import api from "../../services/apiClient";


interface MonthAvaliabilityItem {
    day: number;
    avaliable: boolean;
}

interface Appointment2 {
    id: string;
    date: string;
    hourFormatted: string;
    user: {
        name: string;
        avatar_url: string;
    }
}

const Homepage:React.FC = ( ) => { 
    const { user } = useAuth();
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [currentMonth, setCurrenteMonth] = useState(new Date());
    const [monthAvaliability, setMonthAvaliability] = useState<MonthAvaliabilityItem[]>([]);
    const [appointments, setAppointments] = useState<Appointment2[]>([]);
    const token = localStorage.getItem('@Followup:token');


    const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => { 
        console.log('oi')
        if (modifiers.avaliable && !modifiers.disabled) {
            setSelectedDate(day);
        }   
    }, []);

    const handleMonthChange = useCallback ((month: Date) => {
        setCurrenteMonth(month);
    }, []);


    useEffect(() => {
        api.get(`/users/${user.id}`, {
            // possivel cagada//
            headers: {
                'Authorization': `Bearer ${token}`
            },
             // possivel cagada//
            params: {
                year: currentMonth.getFullYear(),
                month: currentMonth.getMonth() + 1,           
            },
        }).then(response => {
            setMonthAvaliability(response.data);
        });
    }, [currentMonth, user.id, token]);

    useEffect(() => {
        api.get<Appointment2[]>('/appointments', {
            headers: {
                'Authorization': `Bearer ${token}`
            },
            params: {
                year: selectedDate.getFullYear(),
                month: selectedDate.getMonth() + 1,
                day: selectedDate.getDate(), 
            }
        }).then(response => {
            const appointmentsFormatted = response.data.map(appointment => {
                return {
                    ...appointment,
                    hourFormatted: format(parseISO(appointment.date), 'HH:mm')
                }
            });

            setAppointments(appointmentsFormatted);
        })
        
    }, [selectedDate, token])
    
    const selectedDayAsText = useMemo(() => {
        return format(selectedDate, "'Dia' dd 'de' MMMM", {
            locale: ptBR,
        })
    }, [selectedDate]);

    const selectedWeekDay = useMemo(() => {
        return format(selectedDate, 'cccc', {locale: ptBR})
    }, [selectedDate]);

    const morningAppointments = useMemo(( ) => {
        return appointments.filter(appointment => {
            return parseISO(appointment.date).getHours() < 12;
        })
    }, [appointments]);

    const afternoonAppointments = useMemo(( ) => {
        return appointments.filter(appointment => {
            return parseISO(appointment.date).getHours() >= 12;
        })
    }, [appointments]);

    const nextAppointment = useMemo(() => {
        return appointments.find(appointment =>
            isAfter (parseISO(appointment.date), new Date())   
        )
    }, [appointments])

    const disabledDays = useMemo(() => { 
        // eslint-disable-next-line eqeqeq
        const dates = monthAvaliability.filter(monthDay => monthDay.avaliable === false)
        .map(monthDay => {
            const year = currentMonth.getFullYear();
            const month = currentMonth.getMonth();
            return new Date(year, month, monthDay.day);


        });

        return dates;
    }, [currentMonth, monthAvaliability]);

    return (<>
        <SideBar/>
        <TopBar/>
        <Container>
            <SubContainer>
                <Content>
                    <GridContainer>
                        <Topside>
                            <h4>Followup</h4>
                        </Topside>
                        <FollowupContainer>
                            <Schedule>
                                <h1>Horários agendados</h1>
                                <p>
                                    {isToday(selectedDate) && <span>Hoje</span>}
                                    <span>{selectedDayAsText}</span>
                                    <span>{selectedWeekDay}</span>
                                </p>

                                {isToday(selectedDate) && nextAppointment && (
                                    <NextAppointment>
                                        <strong>Agendamento a Seguir</strong>
                                        <div>
                                            <img src={nextAppointment.user.avatar_url} alt={nextAppointment.user.name} />
                                            
                                            <strong>{nextAppointment.user.name}</strong>
                                            <span>
                                                <FiClock/>
                                                {nextAppointment.hourFormatted}
                                            </span>
                                        </div>
                                    </NextAppointment>
                                )}

                                <Section>
                                    <strong>Manhã</strong>

                                    {morningAppointments.length === 0 && (
                                        <p>Nenhum agendamento nesse período</p>
                                    )}

                                    {morningAppointments.map(appointment => (
                                        <Appointment key={appointment.id}>
                                            <span>
                                                <FiClock/>
                                                {appointment.hourFormatted}
                                            </span>

                                            <div>
                                                <img src={appointment.user.avatar_url} alt="Vinicius Ferreira" />
                                                <strong>{appointment.user.name}</strong>
                                            </div>
                                        </Appointment>
                                    ))}

                                    

                                </Section>
                                <Section>
                                    {afternoonAppointments.map(appointment => (
                                            <Appointment key={appointment.id}>
                                                <span>
                                                    <FiClock/>
                                                    {appointment.hourFormatted}
                                                </span>

                                                <div>
                                                    <img src={appointment.user.avatar_url} alt="Vinicius Ferreira" />
                                                    <strong>{appointment.user.name}</strong>
                                                </div>
                                            </Appointment>
                                        ))}
                                </Section>

                            </Schedule>

                            <Calendar>
                            <DayPicker
                                weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
                                fromMonth={new Date()}
                                disabledDays={[
                                    {daysOfWeek: [0, 6]}, ...disabledDays 
                                ]}
                                modifiers={{
                                    available: { daysOfWeek: [1, 2, 3, 4, 5]},
                                }}
                                onMonthChange={handleMonthChange}
                                selectedDays={selectedDate}
                                onDayClick={handleDateChange}
                                months= {[
                                    'Janeiro',
                                    'Fevereiro',
                                    'Março',
                                    'Abril',
                                    'Maio',
                                    'Junho',
                                    'Julho',
                                    'Agosto',
                                    'Setembro',
                                    'Outubro',
                                    'Novembro',
                                    'Dezembro',

                                ]}
                            />
                            </Calendar>
                        </FollowupContainer>
                        
                        
                    </GridContainer>
                </Content>
            </SubContainer>
        </Container>
    </>)
    
};


export default Homepage;