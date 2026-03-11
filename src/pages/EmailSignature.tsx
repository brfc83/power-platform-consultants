import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";

const EmailSignature = () => {
  const [copied, setCopied] = useState(false);

  const signatureHtml = `
<table cellpadding="0" cellspacing="0" border="0" style="font-family: Arial, Helvetica, sans-serif; color: #002B3D;">
  <tr>
    <td style="padding-right: 20px; vertical-align: top; border-right: 3px solid #1DB9A0;">
      <img src="https://www.formaautomate.com/fa-uploads/forma-automate-brand-logo.png" alt="Forma Automate" width="140" style="display: block;" />
    </td>
    <td style="padding-left: 20px; vertical-align: top;">
      <table cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="font-size: 18px; font-weight: 700; color: #002B3D; padding-bottom: 2px;">
            Your Name
          </td>
        </tr>
        <tr>
          <td style="font-size: 13px; font-weight: 500; color: #1DB9A0; padding-bottom: 12px; text-transform: uppercase; letter-spacing: 0.5px;">
            Founder &amp; Director
          </td>
        </tr>
        <tr>
          <td style="font-size: 13px; color: #002B3D; padding-bottom: 4px;">
            <a href="https://www.formaautomate.com" style="color: #002B3D; text-decoration: none;">formaautomate.com</a>
          </td>
        </tr>
        <tr>
          <td style="padding-top: 8px;">
            <a href="https://www.linkedin.com/company/forma-automate" style="text-decoration: none;">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" width="20" height="20" style="display: inline-block; vertical-align: middle;" />
            </a>
          </td>
        </tr>
        <tr>
          <td style="padding-top: 14px; border-top: 1px solid #E5E7EB; margin-top: 12px;">
            <p style="font-size: 11px; color: #6B7280; margin: 8px 0 0 0; line-height: 1.4; max-width: 320px;">
              Design-led Power Platform consulting — streamlining workflows for aviation, legal, financial regulation &amp; beyond.
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
        <h1 className="text-3xl font-bold text-foreground mb-2">Email Signature Preview</h1>
        <p className="text-muted-foreground mb-8">
          Preview your branded email signature below. Replace "Your Name" and "Founder & Director" with your details, then copy the HTML.
        </p>

        {/* Live Preview */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6 border">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4 font-medium">Live Preview</p>
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
