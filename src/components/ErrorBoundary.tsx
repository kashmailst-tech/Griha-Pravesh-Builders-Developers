import React, { ErrorInfo, ReactNode } from "react";
import GlassCard from "./GlassCard";
import { TriangleAlert } from "lucide-react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: any;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }

  public static getDerivedStateFromError(error: any): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: any, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      let errorMessage = "Something went wrong.";
      try {
        const parsedError = JSON.parse(this.state.error.message);
        if (parsedError.error) {
          errorMessage = `Firestore Error: ${parsedError.error} (Op: ${parsedError.operationType})`;
        }
      } catch (e) {
        errorMessage = this.state.error.message || errorMessage;
      }

      return (
        <div className="min-h-[400px] flex items-center justify-center p-6">
          <GlassCard className="p-8 text-center border-red-100 max-w-md">
            <TriangleAlert size={48} className="mx-auto text-red-500 mb-4" />
            <h2 className="text-xl font-bold text-maroon mb-2">Oops! An error occurred</h2>
            <p className="text-warm-gray text-sm mb-6">{errorMessage}</p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-maroon text-beige px-6 py-2 rounded-lg font-bold"
            >
              Reload Page
            </button>
          </GlassCard>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
