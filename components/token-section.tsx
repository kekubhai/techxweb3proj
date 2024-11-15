"use client";

import { useState } from "react";
import { useAccount, useBalance } from "wagmi";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, } from "./ui/card";
import { useToast } from "@/hooks/use-toast";

export function TokenSection() {
  const { address } = useAccount();
  const { toast } = useToast();
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");

 
  const contractAddress = "YOUR_CONTRACT_ADDRESS";

  const { data: balance } = useBalance({
    address,
    token: contractAddress,
  });

  const handleTransfer = async () => {
    try {
      
      toast({
        title: "Transfer Initiated",
        description: "Your transfer is being processed...",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to transfer tokens",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Your Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">
                {balance ? balance.formatted : "0"} {balance?.symbol}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Transfer Tokens</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="recipient">Recipient Address</Label>
                  <Input
                    id="recipient"
                    placeholder="0x..."
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="amount">Amount</Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="0.0"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
                <Button
                  className="w-full"
                  onClick={handleTransfer}
                  disabled={!address}
                >
                  Transfer
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}