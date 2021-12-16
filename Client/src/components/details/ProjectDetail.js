import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SlideProject from "./slide/SlideProject";
import { Typography } from "@mui/material";
import projectApi from "../../api/projectApi";
import moment from 'moment';
import LoadingScreen from "../LoandingScreen";

const StyleBox = styled(Box)({
    maxWidth: '900px',
    margin: '0 auto',
    backgroundColor: 'white',
    height: 'auto',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
    flexDirection: 'colurmn',
    position: 'relative',
    zIndex: '100'
});

const StyleBoxContent = styled(Box)({
    display: 'flex',
    maxWidth: '900px',
    margin: '0 auto',
    paddingTop: '20px'
});

export default function ProjectDetail() {
    const [project, setProject] = useState(null);
    const { pathname } = useLocation();

    useEffect(() => {
        const getProject = async () => {
            try {
                const response = await projectApi.getProject(pathname.split('/').pop());
                const { project, prevProject, nextProject } = response
                setProject({
                    current: project,
                    prevProject,
                    nextProject
                });

            } catch (error) {
                console.log('Failed to get project: ', error);
            }
        }

        getProject();
    }, [pathname]);

    console.log(project);

    function handleClick(projectCurrent) {
        if (projectCurrent == null) {
            return `/projects`
        }
        else {
            return `/projects/${projectCurrent.slug}`
        }
    }

    return (
        <>
            {project && (
                <>
                    <StyleBox>
                        <SlideProject images={project.current.images} />
                        <StyleBoxContent>
                            <Box sx={{ width: '80%' }}>
                                <Typography variant="h5"  >
                                    {project.current.name}
                                </Typography>

                                <div className="scrollbar scrollbar-detail" id="style-4">
                                    <div className="force-overflow">
                                        <Typography variant="p" sx={{ fontSize: '12px', color: '#6D6D6D' }}>
                                            <div dangerouslySetInnerHTML={{ __html: `${project.current.description}` }}></div>

                                        </Typography>
                                    </div>
                                </div>
                            </Box>
                            <Box sx={{ maxWidth: '20%', marginTop: '32px', marginLeft: '15px' }}>
                                
                                    <Typography variant="p" sx={{ color: '#000000' }}>
                                        TIME:
                                        <Typography variant="p" sx={{ color: '#6D6D6D', marginLeft: '10px' }}>
                                            {moment(project.current.createAt).format('DD/MM/YYYY')}
                                        </Typography>
                                    </Typography>
                                    <br />
                                    <Typography variant="p" sx={{ marginTop: '80px', color: '#000000' }} >
                                        ARCHITECT:
                                        <Typography variant="p" sx={{ color: '#6D6D6D', marginLeft: '10px' }}>
                                            {project.current.architect.name}
                                        </Typography>
                                    </Typography>
                                
                            </Box>
                        </StyleBoxContent>
                        <Box sx={{ marginTop: '40px'}}>
                            <div className='pagination'>
                                <a
                                    href={handleClick(project.prevProject)}
                                >
                                    Prev
                                </a>
                                <Typography sx={{fontSize: '18px'}}>
                                    A7 Studio
                                </Typography>
                                <a
                                    href={handleClick(project.nextProject)}
                                >
                                    Next
                                </a>
                            </div>
                        </Box>

                    </StyleBox>


                </>
            )}
            {!project && (<LoadingScreen />)}
        </>
    )
}