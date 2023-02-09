import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const SentireSign = new GestureDescription('Sentire');

//Thumb
SentireSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
SentireSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

//Index
SentireSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
SentireSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
SentireSign.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);

//Middle
SentireSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
SentireSign.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 1.0);

//Ring
SentireSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
SentireSign.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 1.0);

//Pinky
SentireSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
SentireSign.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 1.0);

