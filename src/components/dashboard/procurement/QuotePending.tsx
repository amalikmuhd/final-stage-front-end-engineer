import QuoteDetailsHeader from "./Quotes/QuoteDetailsHeader";
import QoutesInformation from "./Quotes/QoutesInformation";
import QoutesItems from "./Quotes/Qoutes";
import QoutesTerms from "./Quotes/Terms";

interface QuotePendingProps {
  onRespond?: () => void;
}

export default function QuotePending({ onRespond }: QuotePendingProps) {
  return (
    <>
      <QuoteDetailsHeader onRespond={onRespond} onReject={() => {}} />
      <QoutesInformation />
      <QoutesItems />
      <QoutesTerms />
    </>
  );
}
