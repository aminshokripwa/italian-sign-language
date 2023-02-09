import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const AllSign = new GestureDescription('All');

//Thumb
AllSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
AllSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

//Index
AllSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
AllSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

//Middle
AllSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
AllSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);

//Ring
AllSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
AllSign.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 1.0);

//Pinky
AllSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
AllSign.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 1.0);

