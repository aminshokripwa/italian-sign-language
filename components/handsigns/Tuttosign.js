import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const TuttoSign = new GestureDescription('Tutto');

//Thumb
TuttoSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
TuttoSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Index
TuttoSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
TuttoSign.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 0.70);

//Middle
TuttoSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
TuttoSign.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 0.70);

//Ring
TuttoSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
TuttoSign.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.70);

//Pinky
TuttoSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
TuttoSign.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.70);

