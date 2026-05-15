import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";

const EmailSignature = () => {
  const [copied, setCopied] = useState(false);

  const signatureHtml = `
<p style="font-family: Arial, Helvetica, sans-serif; color: #002B3D; font-size: 14px; margin: 0 0 16px 0;">Warm regards,</p>
<table cellpadding="0" cellspacing="0" border="0" style="font-family: Arial, Helvetica, sans-serif; color: #002B3D;">
  <tr>
    <td style="padding-right: 24px; vertical-align: top; border-right: 2px solid #1DB9A0;">
      <img src="https://www.formaautomate.com/fa-uploads/forma-automate-brand-logo-tagline.png" alt="Forma Automate" width="160" style="display: block;" />
    </td>
    <td style="padding-left: 24px; vertical-align: top;">
      <table cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="font-size: 17px; font-weight: 700; color: #002B3D; padding-bottom: 2px;">
            Arif Gulma
          </td>
        </tr>
        <tr>
          <td style="font-size: 13px; color: #6B7280; padding-bottom: 6px;">
            Founder &amp; Power Platform Consultant
          </td>
        </tr>
        <tr>
          <td style="font-size: 11px; font-weight: 700; color: #1DB9A0; letter-spacing: 0.08em; text-transform: uppercase; padding-bottom: 10px;">
            FORMA AUTOMATE &middot; UK
          </td>
        </tr>
        <tr>
          <td style="font-size: 13px; color: #002B3D; padding-bottom: 4px;">
            <a href="mailto:arif@formaautomate.com" style="color: #002B3D; text-decoration: none;">arif@formaautomate.com</a>
            &nbsp;&middot;&nbsp;
            <a href="tel:+447970291460" style="color: #002B3D; text-decoration: none;">+44 7970 291 460</a>
          </td>
        </tr>
        <tr>
          <td style="font-size: 13px; color: #002B3D; padding-bottom: 12px;">
            <a href="https://www.formaautomate.com" style="color: #002B3D; text-decoration: none;">formaautomate.com</a>
            &nbsp;&middot;&nbsp;
            <a href="https://www.linkedin.com/in/arifgulma/" style="color: #002B3D; text-decoration: none;">LinkedIn</a>
          </td>
        </tr>
        <tr>
          <td style="border-top: 1px solid #E5E7EB; padding-top: 10px;">
            <p style="font-size: 11px; color: #9CA3AF; margin: 0; font-style: italic;">
              Independent Microsoft Power Platform consultancy &middot; United Kingdom
            </p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`.trim();

  const handleCopy = () => {
    navigator.clipboard.writeText(signatureHtml);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-muted/30 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-foreground mb-2">Email Signature</h1>
        <p className="text-muted-foreground mb-8">
          Copy the HTML below and paste it into your email client signature settings.
        </p>

        {/* Live Preview */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6 border">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4 font-medium">Preview</p>
          <div dangerouslySetInnerHTML={{ __html: signatureHtml }} />
        </div>

        {/* Copy Button */}
        <Button onClick={handleCopy} className="mb-8" size="lg">
          {copied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
          {copied ? "Copied!" : "Copy HTML"}
        </Button>

        {/* Raw HTML */}
        <div className="bg-secondary text-secondary-foreground rounded-xl p-6 overflow-x-auto">
          <p className="text-xs uppercase tracking-wider mb-3 opacity-70 font-medium">HTML Code</p>
          <pre className="text-sm whitespace-pre-wrap break-all font-mono leading-relaxed opacity-90">
            {signatureHtml}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default EmailSignature;
