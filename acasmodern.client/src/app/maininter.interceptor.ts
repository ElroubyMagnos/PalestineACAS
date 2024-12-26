import { HttpInterceptorFn } from '@angular/common/http';

export const maininterInterceptor: HttpInterceptorFn = (req, next) => {
  var NewReq = req.clone({ url: 'http://localhost:5091' + req.url });
  // var NewReq = req.clone({ url: 'https://magnosnapil-001-site1.otempurl.com' + req.url });

  return next(NewReq);
};
