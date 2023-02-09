import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const UomoSign = new GestureDescription('Uomo');

//Thumb
UomoSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.9);
UomoSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.9);
UomoSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.9);
UomoSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.9);

//Index
UomoSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
UomoSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.9);
UomoSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.9);

//Middle
UomoSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
UomoSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.9);
UomoSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.9);

//Ring
UomoSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
UomoSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 0.9);
UomoSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 0.9);

//Pinky
UomoSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
UomoSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.9);
UomoSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.9);
