import React from "react";
import {
  Container,
  Grid,
  Paper,
  Card,
  Typography,
  CardActionArea,
  CardMedia,
  CardActions,
  Button,
  CardContent,
} from "@mui/material";
import { Fade } from "react-awesome-reveal"; // Import a fade-in animation library
import { ArrowRightAlt } from "@mui/icons-material";
import SolutionsModal from "../modals/SolutionsModal";
interface Solution {
  title: string;
  video: JSX.Element;
  content: string;
  list?: string[];
}

const solutionsData: Solution[] = [
  {
    title: "Smart lighting",

    video: (
      <iframe
        width="100%"
        height="380"
        src="https://www.youtube.com/embed/6hn6C7QZfn0"
        title="Smart Lighting &amp; Smart Living - Control4"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    ),
    content:
      "Our smart lighting solution consolidates your switches into one keypad by connecting your lights and other smart devices. The lighting controls can also be programmed to run other devices in the home simultaneously with the smart home OS.",
  },
  {
    title: "Smart Home Security",

    video: (
      <iframe
        width="100%"
        height="380"
        src="https://www.youtube.com/embed/37Q0iTRcsqk"
        title="Control4 Home Security | Smart Digital Living"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    ),
    content:
      "You can watch over your home from anywhere and at any time of day or night. Your security features can be integrated into Control4's home operating system. Right from your smartphone, TV screens or dedicated touchscreens, with one tap or even a voice command—you can;",
    list: [
      "Easily check on cameras",
      "Lock or unlock your front door, see the status of door locks",
      "Arm/disarm your security system via the mobile app",
      "Receive alerts when a door or window is opened",
      "Set lights to automatically turn on at dusk",
      "Open and close your smart curtains at scheduled times",
      "Set up a secure two-way conversation using touchscreen panels that ring on your mobile app",
      "Set up an alert to notify you if movement is detected by a pool or fire pit",
      "Control your home privacy settings with easy-to-use tools and clear choices",
    ],
  },
  {
    title: "Automated Curtains ",

    video: (
      <iframe
        width="100%"
        height="380"
        src="https://www.youtube.com/embed/gte4_PoxQeg"
        title="Lutron Curtain Track + Control4 Mobile App"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    ),
    content:
      "Automatically open, raise, lower or tilt individual window coverings. Quiet automated curtains that work at the touch of a button or through a personalized schedule.",
  },
  {
    title: "Intercom Anywhere",

    video: (
      <iframe
        width="100%"
        height="380"
        src="https://www.youtube.com/embed/Aib1uHAVB5o"
        title="Intercom Anywhere by Control4"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    ),
    content:
      "Whether you're home or away, with Intercom Anywhere you can monitor and communicate with any room of your smart home. Receive calls from your front door, the gate, or from anywhere inside the house. Give instant access to the house for your guests from the same app, when our door bell rings. It's the perfect blend of peace of mind and home control.",
  },
  {
    title: "Multi-room Audio",

    video: (
      <iframe
        width="100%"
        height="380"
        src="https://www.youtube.com/embed/goXoaCZKIXo"
        title="Juke Audio | Multi-Room Audio System | Phone Controlled Wireless Streaming Amplifier"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    ),
    content:
      "With multi-room audio, you can stream your favorite playlist everywhere, or in one room—at the touch of a button or a voice command. Don't even lift a finger. Simply tell Alexa what you want to hear and where, and instantly fill the house with high-quality sound.",
  },
  {
    title: "Voice Control",
    video: (
      <iframe
        width="100%"
        height="380"
        src="https://www.youtube.com/embed/hIEIGDsbKqY"
        title="5 Smart Home Tech (for Amazon Echo, Google Home &amp; Siri!)"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    ),
    content:
      "With a simple voice command, your Smart Home is prompted to turn off every light in the house, lock all doors, ensure that all entertainment devices are shut down, and arm the security system.",
  },
  {
    title: "Universal Remote",

    video: (
      <iframe
        width="100%"
        height="380"
        src="https://www.youtube.com/embed/mJ-U1aLRmU0"
        title="Short Demo - Near Smart Universal Remote (IR) with Humidity &amp; Temperature Sensor"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    ),
    content:
      "The universal remote has the power and intelligence to communicate with and control nearly everything outside of your media cabinet. As the family gathers for movie night, simply close the curtains, dim the lights, and lock the doors—from the palm of your hand. The customisable buttons and icons allow quick access to your most frequently-used commands.",
    list: [
      "Easily check on cameras",
      "Lock or unlock your front door, see the status of door locks",
      "Arm/disarm your security system via the mobile app",
      "Receive alerts when a door or window is opened",
      "Set lights to automatically turn on at dusk",
      "Open and close your smart curtains at scheduled times",
      "Set up a secure two-way conversation using touchscreen panels that ring on your mobile app",
      "Set up an alert to notify you if movement is detected by a pool or fire pit",
      "Control your home privacy settings with easy-to-use tools and clear choices",
    ],
  },
];

const SolutionsSection: React.FC = () => {
  const [openModal, setOpen] = React.useState(false);
  const [currentSolution, setCurrentSolution] = React.useState<Solution | null>(
    null
  );
  const toggleModal = (solution: Solution) => {
    setOpen((current) => !current);

    setCurrentSolution(solution);
  };
  const toggleActiveModal = () => {
    setOpen((current) => !current);
  };
  return (
    <Paper
      id="solutions"
      sx={{
        backgroundColor: "#fff",
        padding: "60px 0",
        borderRadius: 0,
      }}
    >
      <Container>
        <Typography
          variant="h2"
          fontSize="max(3.2vw,2rem)"
          color="#e87a2d"
          align="center"
          gutterBottom
        >
          Our Solutions
        </Typography>
        <Typography
          variant="subtitle2"
          align="center"
          sx={{
            paddingX: {
              md: "13rem",
            },
            mb: 5,
          }}
          gutterBottom
        >
          The Solutions Smart living gives you the ability to control and
          automate your home's lighting, temperature, security, and
          entertainment systems through a single device
        </Typography>
        <Grid
          container
          spacing={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          {solutionsData.map((solution, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
              sx={{ alignSelf: "flex-start" }}
            >
              <Fade cascade damping={1}>
                <Card
                  sx={{
                    maxWidth: { md: 345, xs: "100%" },
                    boxShadow: 0,
                    ":hover": {
                      boxShadow: 1,
                    },
                  }}
                >
                  <CardActionArea onClick={() => toggleModal(solution)}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={`/assets/solutions/solution-${index + 1}.png`}
                      alt="Blog Featured Image"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {solution.title}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="warning"
                      type="button"
                      onClick={() => toggleModal(solution)}
                    >
                      Read More <ArrowRightAlt />
                    </Button>
                  </CardActions>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>
      <SolutionsModal
        toggleActiveModal={toggleActiveModal}
        openModal={openModal}
        solution={currentSolution}
      />
    </Paper>
  );
};

export default SolutionsSection;
