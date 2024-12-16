import Button from "./shared/Button";

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const CustomModal = ({ isOpen, onClose, onConfirm }: CustomModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="pd-overlay fixed inset-0 w-full h-full bg-black bg-opacity-50 z-[60] overflow-x-hidden overflow-y-auto flex items-center justify-center">
      <div className="transform translate-y-3 w-[400px] transition-all duration-500">
        <div className="flex flex-col bg-white rounded-2xl py-4 pt-8 px-5">
          <h4 className="text-sm text-gray-900 font-medium">Confirmation</h4>

          <div className="overflow-y-auto py-4 min-h-[100px]">
            <p className="text-text-secondary font-satoshi-regular text-sm">
              You are about to submit this quote in response to RFQ ID, this will immediately be sent to the client
              "Westend Clear Hospital". Are you sure you want to proceed?
            </p>
          </div>
          <div className="flex items-center justify-end space-x-4">
            <Button
              width="w-[78px]"
              height="h-[36px]"
              variant="outlined"
              onClick={onClose}
              borderColor="#D0D5DD"
              textColor="#344054"
              className="border-[2px]"
            >
              Cancel
            </Button>
            <Button width="w-[125px]" height="h-[36px]" variant="primary" onClick={onConfirm} className="border-[2px]">
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
