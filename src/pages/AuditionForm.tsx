import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AuditionForm = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-black-card to-black-muted flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-gold to-gold-dark rounded-full flex items-center justify-center mx-auto mb-8">
          <Calendar className="w-8 h-8 text-black-deep" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Auditions
        </h1>
        
        <div className="bg-gradient-to-r from-gold/10 to-gold-dark/10 border border-gold/20 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gold mb-4">
            Not Open Yet
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            We're currently not accepting auditions at the moment. Please check back later or follow our social media for updates on when auditions will be open.
          </p>
          <p className="text-muted-foreground">
            When auditions are open, you'll be able to apply directly through our online form.
          </p>
        </div>
        
        <Button 
          variant="gold-outline" 
          size="lg" 
          onClick={() => navigate('/')}
          className="inline-flex items-center"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default AuditionForm;