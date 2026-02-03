# Vercel Deployment Guide

This project is optimized for deployment on Vercel. Follow these steps to deploy successfully.

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **GitHub Repository**: Push your code to GitHub
3. **Environment Variables**: Prepare all required environment variables

## Quick Deploy

1. Import your GitHub repository in Vercel
2. Vercel will auto-detect Next.js framework
3. Add environment variables (see below)
4. Deploy!

## Required Environment Variables

Add these in your Vercel project settings (Settings → Environment Variables):

### Supabase Configuration
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Resend Email Configuration
```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
REPORT_RECIPIENT_EMAIL=your-email@example.com
RESEND_FROM_EMAIL=noreply@yourdomain.com
```

### Site Configuration (Optional)
```
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

## Build Configuration

The project is configured with:

- ✅ **Next.js 14** with App Router
- ✅ **SWC Minification** enabled for faster builds
- ✅ **Image Optimization** with AVIF and WebP support
- ✅ **Security Headers** configured
- ✅ **Legacy files excluded** from build
- ✅ **ESLint** configured for app directories only
- ✅ **TypeScript** strict checking enabled

## Build Optimizations

### Performance
- SWC compiler for faster builds
- Image optimization with modern formats
- Console removal in production (except errors/warnings)
- Bundle size optimization

### Security
- X-Frame-Options: SAMEORIGIN
- X-Content-Type-Options: nosniff
- Referrer-Policy: origin-when-cross-origin
- X-DNS-Prefetch-Control: on

### Build Exclusions
- Legacy `src/pages/` directory excluded
- Test files excluded
- Development files excluded

## Deployment Checklist

- [ ] All environment variables added to Vercel
- [ ] Supabase project configured and accessible
- [ ] Resend API key configured
- [ ] Domain verified in Resend (for production)
- [ ] Build completes successfully
- [ ] All routes accessible
- [ ] API routes working
- [ ] Email notifications working

## Troubleshooting

### Build Fails
- Check environment variables are set correctly
- Verify all dependencies are in `package.json`
- Check build logs for specific errors

### API Routes Not Working
- Verify environment variables are set
- Check API route logs in Vercel dashboard
- Ensure Resend API key is valid

### Images Not Loading
- Verify image domains in `next.config.js` if using external images
- Check image optimization settings

## Post-Deployment

1. **Test all functionality**:
   - Report submission form
   - Email notifications
   - Authentication
   - Dashboard features

2. **Monitor**:
   - Vercel Analytics (if enabled)
   - Error logs in Vercel dashboard
   - API usage in Resend dashboard

3. **Custom Domain** (Optional):
   - Add custom domain in Vercel project settings
   - Update `NEXT_PUBLIC_SITE_URL` environment variable
   - Update DNS records as instructed by Vercel

## Support

For deployment issues, check:
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- Project README.md for setup instructions
