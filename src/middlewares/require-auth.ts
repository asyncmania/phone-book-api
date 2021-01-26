import { Request, Response, NextFunction } from "express";

import { ICustomRequest } from './basic-auth'


export const requireAuth = (req:ICustomRequest , res:Response, next:NextFunction) => {
    if(req.user) {
      return next()
    }
    return res.sendStatus(401)
}