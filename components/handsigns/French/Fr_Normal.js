import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const NormalSign = new GestureDescription('Normal');

//Thumb
NormalSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.9);
NormalSign.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);

//Index
NormalSign.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
NormalSign.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);

//Middle
NormalSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
NormalSign.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 1.0);

//Ring
NormalSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
NormalSign.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.9);

//Pinky
NormalSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
NormalSign.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.9);

