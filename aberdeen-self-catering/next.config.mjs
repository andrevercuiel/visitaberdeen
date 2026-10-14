/** @type {import('next').NextConfig} */
const nextConfig = {
 reactStrictMode:true,
 poweredByHeader:false,
 compress:true,
 async redirects(){
  return [
   {source:"/contact",destination:"/contact-us",permanent:true},
   {source:"/things-to-do",destination:"/activities",permanent:true},
   {source:"/our-story",destination:"/#welcome",permanent:true}
  ];
 },
 async headers(){
  return [{source:"/media/:path*",headers:[{key:"Cache-Control",value:"public, max-age=31536000, immutable"}]}];
 }
};
export default nextConfig;
