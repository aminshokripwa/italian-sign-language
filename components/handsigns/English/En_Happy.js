import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const HappySign = new GestureDescription('Happy');

//Thumb
HappySign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
HappySign.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

//Index
HappySign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
HappySign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

//Middle
HappySign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
HappySign.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);

//Ring
HappySign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
HappySign.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);

//Pinky
HappySign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
HappySign.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 1.0);

