import React from "react";

import PublicSidebar from "../../assets/components/PublicSidebar";

import {Container, SubContainer, Content, GridContainer, GridItems, SmallGrid, BigGrid, SideGrid} from './styles';

const Dashboard:React.FC = ( ) => (
    <>
        <Container>
        <PublicSidebar/>
            <SubContainer>
                <Content>
                    <GridContainer>
                        <GridItems>
                        <SmallGrid>
                            <div> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida pretium risus, consectetur feugiat velit aliquet at. Praesent nibh leo, aliquet sit amet bibendum et, efficitur nec sapien. Nam sodales ex neque, ut euismod elit mattis at. Maecenas malesuada maximus nisi ut feugiat. Aenean posuere augue massa, a volutpat sapien mollis ut.
                            </div>
                        </SmallGrid>
                        <SmallGrid>
                            <div> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida pretium risus, consectetur feugiat velit aliquet at. Praesent nibh leo, aliquet sit amet bibendum et, efficitur nec sapien. Nam sodales ex neque, ut euismod elit mattis at. Maecenas malesuada maximus nisi ut feugiat. Aenean posuere augue massa, a volutpat sapien mollis ut.
                            </div>
                        </SmallGrid>
                        <SmallGrid>
                            <div> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida pretium risus, consectetur feugiat velit aliquet at. Praesent nibh leo, aliquet sit amet bibendum et, efficitur nec sapien. Nam sodales ex neque, ut euismod elit mattis at. Maecenas malesuada maximus nisi ut feugiat. Aenean posuere augue massa, a volutpat sapien mollis ut.
                            </div>
                        </SmallGrid>
                        <SmallGrid>
                            <div> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida pretium risus, consectetur feugiat velit aliquet at. Praesent nibh leo, aliquet sit amet bibendum et, efficitur nec sapien. Nam sodales ex neque, ut euismod elit mattis at. Maecenas malesuada maximus nisi ut feugiat. Aenean posuere augue massa, a volutpat sapien mollis ut.
                            </div>
                        </SmallGrid>

                        <BigGrid>
                            <div> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida pretium risus, consectetur feugiat velit aliquet at. Praesent nibh leo, aliquet sit amet bibendum et, efficitur nec sapien. Nam sodales ex neque, ut euismod elit mattis at. Maecenas malesuada maximus nisi ut feugiat. Aenean posuere augue massa, a volutpat sapien mollis ut.
                            </div>
                        </BigGrid>
                        <SideGrid>
                            <div> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida pretium risus, consectetur feugiat velit aliquet at. Praesent nibh leo, aliquet sit amet bibendum et, efficitur nec sapien. Nam sodales ex neque, ut euismod elit mattis at. Maecenas malesuada maximus nisi ut feugiat. Aenean posuere augue massa, a volutpat sapien mollis ut.
                            </div>
                        </SideGrid>
                        <SideGrid>
                            <div> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida pretium risus, consectetur feugiat velit aliquet at. Praesent nibh leo, aliquet sit amet bibendum et, efficitur nec sapien. Nam sodales ex neque, ut euismod elit mattis at. Maecenas malesuada maximus nisi ut feugiat. Aenean posuere augue massa, a volutpat sapien mollis ut.
                            </div>
                        </SideGrid>
                        <BigGrid>
                            <div> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida pretium risus, consectetur feugiat velit aliquet at. Praesent nibh leo, aliquet sit amet bibendum et, efficitur nec sapien. Nam sodales ex neque, ut euismod elit mattis at. Maecenas malesuada maximus nisi ut feugiat. Aenean posuere augue massa, a volutpat sapien mollis ut.
                            </div>
                        </BigGrid>

                        </GridItems>
                    </GridContainer>
                </Content>
            </SubContainer>
        </Container>
    </>
)

export default Dashboard;