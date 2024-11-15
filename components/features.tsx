import {
    ShieldCheck,
    Wallet,
    ArrowLeftRight,
    BarChart3,
  } from "lucide-react";
  
  export function Features() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2">
            <div className="flex flex-col items-center space-y-4">
              <ShieldCheck className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Secure</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Built on Ethereum with industry-standard security practices
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <Wallet className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Easy to Use</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Connect your wallet and start interacting with our token
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <ArrowLeftRight className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Fast Transfers</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Quick and efficient token transfers between wallets
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <BarChart3 className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Real-time Updates</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Track your balance and transactions in real-time
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }