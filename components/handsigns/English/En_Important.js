import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const ImportantEnSign = new GestureDescription('Important');

//Thumb
ImportantEnSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
ImportantEnSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

//Index
ImportantEnSign.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
ImportantEnSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

//Middle
ImportantEnSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
ImportantEnSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);

//Ring
ImportantEnSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
ImportantEnSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

//Pinky
ImportantEnSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
ImportantEnSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

