import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Log 404 for monitoring but don't console.error as it affects SEO crawling
    console.log("404: Route not found:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Page Not Found | Forma Automate</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to Forma Automate's homepage to find Power Platform consulting services." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Header />
      
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center max-w-2xl px-4">
          <div className="mb-8">
            <h1 className="text-8xl font-bold text-primary/20 mb-4">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="group">
              <Link to="/">
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </Link>
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.history.back()} className="group">
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
