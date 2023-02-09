import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const DonnaSign = new GestureDescription('Donna');

//Thumb
DonnaSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
DonnaSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

//Index
DonnaSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
DonnaSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
DonnaSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

//Middle
DonnaSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
DonnaSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

//Ring
DonnaSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
DonnaSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

//Pinky
DonnaSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
DonnaSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

