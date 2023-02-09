import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const VolereSign = new GestureDescription('Volere');

//Thumb
VolereSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
VolereSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);
VolereSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

//Index
VolereSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
VolereSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

//Middle
VolereSign.addCurl(Finger.Middle, FingerCurl.HalfCurl, 0.9);
VolereSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.9);
VolereSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.9);

//Ring
VolereSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 0.9);
VolereSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 0.9);
VolereSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 0.9);

//Pinky
VolereSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
VolereSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.9);
VolereSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.9);

