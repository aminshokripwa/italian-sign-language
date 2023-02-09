import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const ExperienceEnSign = new GestureDescription('Experience');

//Thumb
ExperienceEnSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
ExperienceEnSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

//Index
ExperienceEnSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
ExperienceEnSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

//Middle
ExperienceEnSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
ExperienceEnSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);

//Ring
ExperienceEnSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
ExperienceEnSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);

//Pinky
ExperienceEnSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
ExperienceEnSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);

