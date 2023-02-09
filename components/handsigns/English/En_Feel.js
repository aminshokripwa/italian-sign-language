import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const FeelSign = new GestureDescription('Feel');

//Thumb
FeelSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
FeelSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

//Index
FeelSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
FeelSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

//Middle
FeelSign.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1.0);
FeelSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);

//Ring
FeelSign.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1.0);
FeelSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);

//Pinky
FeelSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
FeelSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);

