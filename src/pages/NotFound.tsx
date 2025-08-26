import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <section className="section">
        <div className="container text-center">
          <div className="max-w-2xl mx-auto">
            <div className="mb-8">
              <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
              <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
              <p className="text-xl text-foreground/80 mb-8">
                The page you're looking for doesn't exist. But your wellness journey can start here.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              <span className="tag">You Belong Here</span>
              <span className="tag">Start where you are</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/">
                  <Home className="mr-2 h-4 w-4" />
                  Return Home
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/schedule">
                  <Search className="mr-2 h-4 w-4" />
                  Browse Classes
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
