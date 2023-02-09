import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const TuttoSign = new GestureDescription('Tutto');

//Thumb
TuttoSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
TuttoSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

//Index
TuttoSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
TuttoSign.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);

//Middle
TuttoSign.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1.0);
TuttoSign.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 1.0);

//Ring
TuttoSign.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1.0);
TuttoSign.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 1.0);

//Pinky
TuttoSign.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1.0);
TuttoSign.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 1.0);

