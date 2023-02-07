import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const NormaleSign = new GestureDescription('Normale');

//Thumb
NormaleSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
NormaleSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Index
NormaleSign.addCurl(Finger.Index, FingerCurl.HalfCurl, 1);
NormaleSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Middle
NormaleSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
NormaleSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.70);

//Ring
NormaleSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
NormaleSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 0.70);

//Pinky
NormaleSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
NormaleSign.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 0.70);

