import { ButtonComponent } from './Button';
import { Card, CardMedia, Typography } from '@mui/material'

export function CardComponent({handleUser, users}) {
    return (
        users.map(user => {
            return (<div>
                <Card 
                    variant="outlined"
                    sx={{
                        position: "relative",
                        width: "20%",
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "center",
                        marginTop: "50px"
                    }} 
                    >
                    <CardMedia
                        sx={{ height: 350 }}
                        image="/image.png"
                        title="User"
                    />
                    <Typography
                        sx={{

                        }}
                    >
                        {user.name}
                    </Typography>
                    <ButtonComponent type="Edit" handleUser={handleUser} user={user}/>
                    <ButtonComponent type="Remove" handleUser={handleUser} user={user}/>
                </Card>
            </div>)
        })
    );
};