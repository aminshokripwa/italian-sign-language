import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const PalirSign = new GestureDescription('Pâlir');

//Thumb
PalirSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.9);
PalirSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

//Index
PalirSign.addCurl(Finger.Index, FingerCurl.HalfCurl, 0.9);
PalirSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

//Middle
PalirSign.addCurl(Finger.Middle, FingerCurl.HalfCurl, 0.9);
PalirSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);

//Ring
PalirSign.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);
PalirSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 0.9);

//Pinky
PalirSign.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);
PalirSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.9);

