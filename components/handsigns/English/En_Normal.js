import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const NormalEnSign = new GestureDescription('Normal');

//Thumb
NormalEnSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.9);
NormalEnSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

//Index
NormalEnSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
NormalEnSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.9);

//Middle
NormalEnSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
NormalEnSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.9);

//Ring
NormalEnSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
NormalEnSign.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 1.0);

//Pinky
NormalEnSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
NormalEnSign.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 1.0);

