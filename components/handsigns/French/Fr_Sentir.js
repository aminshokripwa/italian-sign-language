import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const SentirSign = new GestureDescription('Sentir');

//Thumb
SentirSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.8);
SentirSign.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 0.8);

//Index
SentirSign.addCurl(Finger.Index, FingerCurl.NoCurl, 0.8);
SentirSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.8);

//Middle
SentirSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 0.9);
SentirSign.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 1.0);

//Ring
SentirSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 0.9);
SentirSign.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.9);

//Pinky
SentirSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 0.9);
SentirSign.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.9);

