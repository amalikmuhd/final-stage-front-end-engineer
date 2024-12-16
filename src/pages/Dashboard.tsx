import { useState } from "react";
import QoutesItems from "../components/dashboard/procurement/Quotes/Qoutes";
import QoutesInformation from "../components/dashboard/procurement/Quotes/QoutesInformation";
import QoutesTerms from "../components/dashboard/procurement/Quotes/Terms";
import CustomHeader from "../components/Header";
import QoutesStepper from "../components/dashboard/procurement/Quotes/QoutesStepper";
import Stack from "../components/shared/Stack";
import Button from "../components/shared/Button";
import { HStack } from "../components/shared/HStack";
import QuoteRequest from "../components/dashboard/procurement/QuoteRequest";
import ViewAttachments from "../components/dashboard/procurement/ViewAttachments";
import QuotePending from "../components/dashboard/procurement/QuotePending";
import { CustomModal } from "../components/Modal";
import { LoadingModal } from "../components/LoadingModal";
import Sidebar from "../components/sidebar/Sidebar";
import BreadCrumb from "../components/shared/BreadCrumb";

export function Dashboard() {
  const [steps, setStep] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showLoadingModal, setShowLoadingModal] = useState(false);

  const handleSubmit = () => {
    setIsModalOpen(false);
    setShowLoadingModal(true);
  };

  return (
    <div className="grid grid-cols-12">
      <Sidebar />

      <div className="col-span-12 md:col-span-10 rounded-l-xl overflow-auto h-screen">
        <CustomHeader goBack={steps === 0 ? true : false} />

        {steps === 0 && <QuotePending onRespond={() => setStep(1)} />}

        {steps != 0 && (
          <>
            <BreadCrumb />
            {/* Show stepper for all steps except 0 */}
            <QoutesStepper step={steps} />

            <Stack className="px-8 border border-[#E4E7EC] py-6 mt-8 rounded mx-8 mb-4">
              {steps === 1 && <QuoteRequest />}
              {steps === 2 && <ViewAttachments />}
            </Stack>
            {steps === 3 && (
              <div>
                <QoutesInformation title="Request Information" onEdit={false} />
                <QoutesItems />
                <QoutesTerms />
              </div>
            )}
          </>
        )}

        {steps != 0 && (
          <Stack className="px-8 mb-5">
            <HStack className="flex flex-row flex-1 items-center justify-end gap-4">
              <Button variant="outlined" height="h-[40px]" onClick={() => setStep((prev) => Math.max(0, prev - 1))}>
                Back
              </Button>
              <Button width="w-[256px]" height="h-[40px]" variant="outlined" borderColor="primary" textColor="primary">
                Save as draft
              </Button>
              <Button
                width="w-[256px]"
                height="h-[40px]"
                onClick={() => {
                  if (steps === 3) {
                    setIsModalOpen(true);
                  } else {
                    setStep((prev) => Math.min(3, prev + 1));
                  }
                }}
              >
                {steps === 3 ? "Submit" : "Continue"}
              </Button>
            </HStack>
          </Stack>
        )}
        <CustomModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onConfirm={handleSubmit} />
        <LoadingModal isOpen={showLoadingModal} onClose={() => setShowLoadingModal(false)} />
      </div>
    </div>
  );
}
