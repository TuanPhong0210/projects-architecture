import * as React from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

export default function AboutUs({ about }) {

    return (
        <>
            <Box sx={{ marginBottom: '1vh', height: '34vh' }}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        px: 2,
                        padding: 0,
                        // marginBottom: '0.5vh'
                    }}
                >
                    <Typography className="section-title"
                        sx={{
                            marginRight: '16px',
                            fontSize: '18px'
                        }}
                    >
                        About Us
                    </Typography>

                </Box>

                <Typography variant='p' sx={{ fontSize: '12px', textOverflow: 'ellipsis' }}>
                    <div className='text-description' dangerouslySetInnerHTML={{ __html: `${about}` }}></div>
                </Typography>

            </Box>

        </>
    );
}


