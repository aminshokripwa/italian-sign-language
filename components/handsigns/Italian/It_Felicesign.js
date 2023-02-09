import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const FeliceSign = new GestureDescription('Felice');

//Thumb
FeliceSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
FeliceSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

//Index
FeliceSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
FeliceSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

//Middle
FeliceSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
FeliceSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);

//Ring
FeliceSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
FeliceSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);

//Pinky
FeliceSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
FeliceSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);

