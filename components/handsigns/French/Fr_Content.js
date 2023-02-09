import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const ContentSign = new GestureDescription('Content');

//Thumb
ContentSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
ContentSign.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);

//Index
ContentSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
ContentSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

//Middle
ContentSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
ContentSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);

//Ring
ContentSign.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);
ContentSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);

//Pinky
ContentSign.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);
ContentSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);

