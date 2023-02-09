import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const NormaleSign = new GestureDescription('Normale');

//Thumb
NormaleSign.addCurl(Finger.Thumb, FingerCurl.NOCurl, 0.9);
NormaleSign.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.8);
NormaleSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.8);

//Index
NormaleSign.addCurl(Finger.Index, FingerCurl.HalfCurl, 0.8);
NormaleSign.addCurl(Finger.Index, FingerCurl.NOCurl, 0.8);
NormaleSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.9);

//Middle
NormaleSign.addCurl(Finger.Middle, FingerCurl.NOCurl, 0.8);
NormaleSign.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 0.9);

//Ring
NormaleSign.addCurl(Finger.Ring, FingerCurl.NOCurl, 0.8);
NormaleSign.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 0.9);

//Pinky
NormaleSign.addCurl(Finger.Pinky, FingerCurl.NOCurl, 0.8);
NormaleSign.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 0.9);

