import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const WantSign = new GestureDescription('Want');

//Thumb
WantSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
WantSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

//Index
WantSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
WantSign.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);

//Middle
WantSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
WantSign.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 1.0);

//Ring
WantSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
WantSign.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 1.0);

//Pinky
WantSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
WantSign.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 1.0);

