import { useState, useEffect } from "react";

interface LoadingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoadingModal = ({ isOpen, onClose }: LoadingModalProps) => {
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // After 5 seconds, show success and close modal
      const timer = setTimeout(() => {
        setShowSuccess(true);
        onClose();

        // Hide success message after 3 seconds and refresh page
        const successTimer = setTimeout(() => {
          setShowSuccess(false);
          window.location.reload();
        }, 2000);

        return () => clearTimeout(successTimer);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  return (
    <>
      {/* Loading Modal */}
      {isOpen && (
        <div className="pd-overlay fixed inset-0 w-full h-full bg-black bg-opacity-50 z-[60] overflow-x-hidden overflow-y-auto flex items-center justify-center">
          <div className="transform translate-y-3 w-[349px] transition-all duration-500">
            <div className="flex flex-col bg-white rounded-[32px] items-center justify-center py-16 px-5">
              <div className="animate-spin w-12 h-12 border-4 border-primary border-t-transparent rounded-full mb-4"></div>
              <h4 className="text-lg text-gray-900 font-satoshi-bold">Sending Quote...</h4>
            </div>
          </div>
        </div>
      )}

      {/* Success Notification */}
      {showSuccess && (
        <div className="fixed top-4 right-4 left-4 z-[70] transition-all duration-300">
          <div className="max-w-[600px] mx-auto bg-white rounded-lg shadow-lg border-l-4 border-green-500 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-900 font-satoshi-bold">RFQ ID sent successfully!</p>
              </div>
              <button
                onClick={() => {
                  setShowSuccess(false);
                  window.location.reload();
                }}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Close</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
