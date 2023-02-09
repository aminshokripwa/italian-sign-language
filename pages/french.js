import React, { useRef, useState, useEffect } from "react"
import * as tf from "@tensorflow/tfjs"
import * as handpose from "@tensorflow-models/handpose"
import Webcam from "react-webcam"
import { drawHand } from "../components/handposeutil"
import * as fp from "fingerpose"
import Handsigns from "../components/handsigns"

import {
  Text,
  Heading,
  Container,
  Box,
  VStack,
  ChakraProvider,
} from "@chakra-ui/react"

import { Signpass } from "../components/handimage"

import Metatags from "../components/metatags"

// import "../styles/App.css"

// import "@tensorflow/tfjs-backend-webgl"

function Home() {

  const webcamRef = useRef(null)
  const canvasRef = useRef(null)

  const [camState, setCamState] = useState("on")

  const [sign, setSign] = useState(null)

  let signList = []
  let currentSign = 0

  let gamestate = "started"

  // let net;

  async function runHandpose() {
    const net = await handpose.load()
    _signList()

    // window.requestAnimationFrame(loop);

    setInterval(() => {
      detect(net)
    }, 150)
  }

  function _signList() {
    signList = Signpass
  }

  function shuffle(a) {
    //console.log(a)
    return a
  }

  function generateSigns() {
    const password = shuffle(Signpass)
    //console.log(password)
    return password
  }

  async function detect(net) {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video
      const videoWidth = webcamRef.current.video.videoWidth
      const videoHeight = webcamRef.current.video.videoHeight

      // Set video width
      webcamRef.current.video.width = videoWidth
      webcamRef.current.video.height = videoHeight

      // Set canvas height and width
      canvasRef.current.width = videoWidth
      canvasRef.current.height = videoHeight

      // Make Detections
      const hand = await net.estimateHands(video)

      if (hand.length > 0) {

        //loading the fingerpose model
        const GE = new fp.GestureEstimator([
          fp.Gestures.ThumbsUpGesture,
          Handsigns.ContentSign,
          Handsigns.ExempleSign,
          Handsigns.FemmeSign,
          Handsigns.HommeSign,
          Handsigns.ImportantSign,
          Handsigns.ExperienceSign,
          Handsigns.NormalSign,
          Handsigns.PalirSign,
          Handsigns.SentirSign,
          Handsigns.TousSign,
        ])
        // using a minimum match score of 8.5 (out of 10)
        const estimatedGestures = await GE.estimate(hand[0].landmarks, 6.5)

        if (gamestate === "started") {
          document.querySelector("#app-title").innerText =
            "Fai un gesto 👍 per iniziare"
        }

        if (
          estimatedGestures.gestures !== undefined &&
          estimatedGestures.gestures.length > 0
        ) {
          const confidence = estimatedGestures.gestures.map(p => p.confidence)
          const maxConfidence = confidence.indexOf(
            Math.max.apply(undefined, confidence)
          )

          //setting up game state, looking for thumb emoji
          if (
            estimatedGestures.gestures[maxConfidence].name === "thumbs_up" &&
            gamestate !== "played"
          ) {
            //_signList()
            gamestate = "played"
            document.querySelector(".tutor-text").innerText =
              "Lingua dei segni avviata"
          } else if (gamestate === "played") {
            document.querySelector("#app-title").innerText = ""

            //looping the sign list
            if (currentSign === signList.length) {
              //_signList()
              currentSign = 0
              return
            }
              setSign(estimatedGestures.gestures[maxConfidence].name)
          /*
          } else if (gamestate === "finished") {
            return
          */
          }
        }
        
      }
      // Draw hand lines in camera
      /*
      const ctx = canvasRef.current.getContext("2d")
      drawHand(hand, ctx)
      */
    }
  }

     if (sign) {
       //console.log(sign, Signimage[sign]) 
       console.log(sign)
     }


  useEffect(() => {
    runHandpose()
  }, [])

  return (
    <ChakraProvider>
      <Metatags />
      <Box bgColor="#5784BA">
        <Container centerContent maxW="xl" height="100vh" pt="0" pb="0">
          <VStack spacing={4} align="center">
            <Box h="20px"></Box>
            <Heading
              as="h3"
              size="md"
              className="tutor-text"
              color="white"
              textAlign="center"
            ></Heading>
            <Box h="20px"></Box>
          </VStack>

          <Heading
            as="h1"
            size="lg"
            id="app-title"
            color="white"
            textAlign="center"
          >
            Caricamento modelli in corso, attendere
          </Heading>

          <Box id="webcam-container">
            {camState === "on" ? (
              <Webcam id="webcam" ref={webcamRef} />
            ) : (
              <div id="webcam" background="black"></div>
            )}

            {(sign && sign != 'thumbs_up') ? (
              <div
              className="footer"
              >
                {sign}
              </div>
            ) : (
              " "
            )}
          </Box>

          <canvas id="gesture-canvas" ref={canvasRef} style={{}} />

        </Container>

      </Box>
    </ChakraProvider>
  )
}
export default Home;