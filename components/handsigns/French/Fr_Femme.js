import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const FemmeSign = new GestureDescription('Femme');

//Thumb
FemmeSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.9);
FemmeSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.8);

//Index
FemmeSign.addCurl(Finger.Index, FingerCurl.NoCurl, 0.9);
FemmeSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.8);

//Middle
FemmeSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 0.9);
FemmeSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.8);

//Ring
FemmeSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 0.9);
FemmeSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.8);

//Pinky
FemmeSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 0.9);
FemmeSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.8);

