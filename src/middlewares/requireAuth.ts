import { Response, NextFunction } from "express";
import { ICustomRequest } from './basicAuth'


export const requireAuth = (req:ICustomRequest, res:Response, next:NextFunction) => {
    if(req.user) {
      return next()
    }
    return res.sendStatus(401)
}