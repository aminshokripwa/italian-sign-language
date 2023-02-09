import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const ManSign = new GestureDescription('Man');

//Thumb
ManSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
ManSign.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);

//Index
ManSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
ManSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

//Middle
ManSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
ManSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);

//Ring
ManSign.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1.0);
ManSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);

//Pinky
ManSign.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1.0);
ManSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);

