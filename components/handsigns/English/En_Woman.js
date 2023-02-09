import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const WomanSign = new GestureDescription('Woman');

//Thumb
WomanSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
WomanSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

//Index
WomanSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
WomanSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

//Middle
WomanSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
WomanSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

//Ring
WomanSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
WomanSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

//Pinky
WomanSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
WomanSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);