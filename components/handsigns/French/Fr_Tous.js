import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const TousSign = new GestureDescription('Tous');

//Thumb
TousSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.9);
TousSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

//Index
TousSign.addCurl(Finger.Index, FingerCurl.HalfCurl, 0.9);
TousSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

//Middle
TousSign.addCurl(Finger.Middle, FingerCurl.HalfCurl, 0.9);
TousSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);

//Ring
TousSign.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);
TousSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 0.9);

//Pinky
TousSign.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);
TousSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.9);

