import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const VolereSign = new GestureDescription('Volere');

//Thumb
VolereSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
VolereSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Index
VolereSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
VolereSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
VolereSign.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1);
VolereSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.70);

//Ring
VolereSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
VolereSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 0.70);

//Pinky
VolereSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
VolereSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.70);

