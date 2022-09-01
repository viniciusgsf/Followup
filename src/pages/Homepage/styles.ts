import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    width: 100%;
    padding-top: 64px;

    @media (min-width: 1200px) {
        padding-left: 280px;
    }
`;

export const SubContainer = styled.div `
    padding-top: 64px;
    padding-bottom: 64px;
    flex-grow: 1;
`;

export const Content = styled.div `
    padding-bottom: 64px;
    flex-grow: 1;
`;

export const GridContainer = styled.div `
    width: 100%;
    margin-left: auto;
    box-sizing: border-box;
    margin-right: auto;
    display: block;

    @media (max-width: 600px) {
        padding-left: 48px;
        padding-right: 24px;
    }
`;

export const Topside = styled.div`
    display: flex;
    align-items: center;

    h4 {
        font-weight: 700;
        font-size: 2rem;
        margin: 8px;
    }

`;

export const FollowupContainer = styled.div`
    display: flex;
    background-color: #FFF;
    color: #121828;
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 8px;
    box-shadow: 0px 1px 1px rgba(100, 116, 139, 0.06),0px 1px 2px rgba(100, 116, 139, 0.1);
    overflow: hidden;
    margin-right: 23px;
    margin-top: 50px;
    

`;

export const Schedule = styled.div`
    flex: 1;
    margin-right: 120px;
    padding-left: 20px;
    padding-right: 20px;

    h1 {
        font-size: 36px;
        
    }
    p {
        margin-top: 8px;
        color: #1565c0;
        display: flex;
        align-items: center;
        font-weight: 500;

        span {
            display: flex;
            align-items: center;
        }
        span + span::before {
            content: '';
            width: 1px;
            height: 12px;
            background: #ff9000;
            margin: 0 8px;
        }
    }
`;


export const NextAppointment = styled.aside`
    margin-top: 64px;

    > strong {
        color: #999591;
        font-size: 20px;
        font-weight: 400;
    }

    div {
        background: #3e3b47;
        display: flex;
        align-items: center;
        padding: 16px 24px;
        border-radius: 10px;
        margin-top: 24px;
        position: relative;

        &::before {
            position: absolute;
            height: 80%;
            width: 1px;
            left: 0;
            top: 10%;
            content: '';
            background: #ff9000;
        }

        img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
        }
        strong {
            margin-left: 24px;
            color: #FFF;
        }
        span {
            margin-left: auto;
            display: flex;
            align-items: center;
            color: #999591;

            svg {
                color: #ff9000;
                margin-right: 8px;
            } 
        }

    }
`;

export const Section = styled.section`
    margin-top: 48px;

    >strong {
        color: #999591;
        font-size: 20px;
        line-height: 26px;
        border-bottom: 1px solid #3e3b47;
        display: block;
        padding-bottom: 16px;
        margin-bottom: 16px;
    }
`;

export const Appointment = styled.div`
    display: flex;
    align-items: center;

    & + div {
        margin-top: 16px;
    }

    span {
            margin-left: auto;
            display: flex;
            align-items: center;
            color: #F4ede8;

            svg {
                color: #ff9000;
                margin-right: 8px;
            } 
        }

    div{
        flex: 1;
        background: #3e3b47;
        display: flex;
        align-items: center;
        padding: 16px 24px;
        border-radius: 10px;
        margin-left: 24px;
        
        img {
            width: 56px;
            height: 56px;
            border-radius: 50%;
        }
        strong {
            margin-left: 24px;
            color: #FFF;
            font-size: 20px;
        }

    }    
`;
export const Calendar = styled.aside`
   width: 380px;

   .DayPicker {
  background: #28262e;
  border-radius: 10px;
}

.DayPicker-wrapper {
  padding-bottom: 0;
}

.DayPicker,
.DayPicker-Month {
  width: 100%;
}

.DayPicker-Month {
  border-collapse: separate;
  border-spacing: 8px;
  margin: 16px;
}

.DayPicker-Day {
  width: 40px;
  height: 40px;
}

.DayPicker-Day--available:not(.DayPicker-Day--outside) {
  background: #1565c0;
  border-radius: 10px;
  color: #fff;
}

.DayPicker:not(.DayPicker--interactionDisabled)
  .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
  background: ${shade(0.2, '#1565c0')};
}

.DayPicker-Day--today {
  font-weight: normal;
}

.DayPicker-Day--disabled {
  color: #666360 !important;
  background: transparent !important;
}

.DayPicker-Day--selected {
  background: #FFF !important;
  border-radius: 10px;
  color: #232129 !important;
}
`;
