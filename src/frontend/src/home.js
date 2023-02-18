import { useState, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Paper, CardActionArea, CardMedia, Grid, TableContainer, Table, TableBody, TableHead, TableRow, TableCell, Button, CircularProgress } from "@material-ui/core";
import image from "./images/lotusTopView.jpg";
import { DropzoneArea } from 'material-ui-dropzone';
import { common } from '@material-ui/core/colors';
import Clear from '@material-ui/icons/Clear';
import "./home.css"

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(common.white),
    backgroundColor: common.white,
    '&:hover': {
      backgroundColor: '#ffffff7a',
    },
  },
}))(Button);
const axios = require("axios").default;

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  clearButton: {
    width: "-webkit-fill-available",
    borderRadius: "15px",
    padding: "15px 22px",
    color: "#000000a6",
    fontSize: "20px",
    fontWeight: 900,
  },
  root: {
    maxWidth: 345,
    flexGrow: 1,
  },
  media: {
    height: 400,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  gridContainer: {
    display: 'flex',
    justifyContent: "center",
    padding: "4em 1em 0 1em",
    margin: "4rem 0",
  },
  mainContainer: {
    // backgroundImage: `url(${image}) no-repeat center center fixed`,
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    minHeight: "100vh",
    overflow: "hidden",
    // filter: "brightness(70%)",
    position: "relative",
  },
  imageCard: {
    margin: "auto",
    maxWidth: "50vw",
    minHeight: "50vh",
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    boxShadow: '0px 9px 70px 0px rgb(0 0 0 / 30%) !important',
    borderRadius: '15px',
    border: '2px solid black',
    '&:hover': {
      backgroundColor: 'transparent',

    },
  },
  content: {
    maxWidth: "50vw",
    minHeight: "50vh",
  },
  imageCardEmpty: {
    height: 'auto',

  },
  noImage: {
    margin: "auto",
    width: 400,
    height: "400 !important",
  },
  input: {
    display: 'none',
  },
  uploadIcon: {
    background: 'white',
  },
  tableContainer: {
    backgroundColor: 'transparent !important',
    boxShadow: 'none !important',
  },
  table: {
    backgroundColor: 'transparent !important',
  },
  tableHead: {
    backgroundColor: 'transparent !important',
  },
  tableRow: {
    backgroundColor: 'transparent !important',
  },
  tableCell: {
    fontSize: '22px',
    backgroundColor: 'transparent !important',
    borderColor: 'transparent !important',
    color: '#000000a6 !important',
    fontWeight: 'bolder',
    padding: '1px 24px 1px 16px',
  },
  tableCell1: {
    fontSize: '14px',
    backgroundColor: 'transparent !important',
    borderColor: 'transparent !important',
    color: '#000000a6 !important',
    fontWeight: 'bolder',
    padding: '1px 24px 1px 16px',
  },
  tableBody: {
    backgroundColor: 'transparent !important',
  },
  text: {
    color: 'white !important',
    textAlign: 'center',
  },
  buttonGrid: {
    maxWidth: "416px",
    width: "100%",
  },
  detail: {
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  appbar: {
    background: '#be6a77',
    boxShadow: 'none',
    color: 'white'
  },
  loader: {
    color: '#be6a77 !important',
  }
}));
export const ImageUpload = () => {
  const classes = useStyles();
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [data, setData] = useState();
  const [image, setImage] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  let confidence = 0;



  const sendFile = async () => {
    if (image) {
      let formData = new FormData();
      formData.append("file", selectedFile);
      let res = await axios({
        method: "post",
        url: process.env.REACT_APP_API_URL,
        // url: '/predict',
        data: formData,
      });
      if (res.status === 200) {
        setData(res.data);
      }
      setIsloading(false);
    }
  }

  const clearData = () => {
    setData(null);
    setImage(false);
    setSelectedFile(null);
    setPreview(null);
  };

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
  }, [selectedFile]);

  useEffect(() => {
    if (!preview) {
      return;
    }
    setIsloading(true);
    sendFile();
  }, [preview]);

  const onSelectFile = (files) => {
    if (!files || files.length === 0) {
      setSelectedFile(undefined);
      setImage(false);
      setData(undefined);
      return;
    }
    setSelectedFile(files[0]);
    setData(undefined);
    setImage(true);
  };

  if (data) {
    confidence = (parseFloat(data.confidence) * 100).toFixed(2);
  }

  return (
    <React.Fragment>
      {/* <button
        class="navbar-toggler navbar-toggler-right d-md-none"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="nav navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>  */}
      {/* <Container maxWidth={false} className={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        height: "100vh"
      }} disableGutters={true}> */}

      <div id="home">
        <Container maxWidth={false} className={classes.mainContainer} disableGutters={true}>
          <Grid
            className={classes.gridContainer}
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs={12}>
              <Card className={`${classes.imageCard} ${!image ? classes.imageCardEmpty : ''}`}>
                {image && <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={preview}
                    component="image"
                    title="Contemplative Reptile"
                  />
                </CardActionArea>
                }
                {!image && <CardContent className={classes.content} >
                  <DropzoneArea
                    acceptedFiles={['image/*']}
                    dropzoneText={"Drag and drop / Upload a Satellite image to process"}
                    onChange={onSelectFile}
                  />
                </CardContent>}
                {data && <CardContent className={classes.detail}>
                  <TableContainer component={Paper} className={classes.tableContainer}>
                    <Table className={classes.table} size="small" aria-label="simple table">
                      <TableHead className={classes.tableHead}>
                        <TableRow className={classes.tableRow}>
                          <TableCell className={classes.tableCell1}>Label:</TableCell>
                          <TableCell align="right" className={classes.tableCell1}>Confidence:</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody className={classes.tableBody}>
                        <TableRow className={classes.tableRow}>
                          <TableCell component="th" scope="row" className={classes.tableCell}>
                            {data.class}
                          </TableCell>
                          <TableCell align="right" className={classes.tableCell}>{confidence}%</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>}
                {isLoading && <CardContent className={classes.detail}>
                  <CircularProgress color="secondary" className={classes.loader} />
                  <Typography className={classes.title} variant="h6" noWrap>
                    Processing
                  </Typography>
                </CardContent>}
              </Card>
            </Grid>
            {data &&
              <Grid item className={classes.buttonGrid} >

                <ColorButton variant="contained" className={classes.clearButton} color="primary" component="span" size="large" onClick={clearData} startIcon={<Clear fontSize="large" />}>
                  Clear
                </ColorButton>
              </Grid>}
          </Grid >
        </Container >
      </div>
    </React.Fragment >
  );
};
