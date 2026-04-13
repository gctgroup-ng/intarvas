import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

const EMPLOYEE_OPTIONS = [
    "1–10 employees",
    "11–50 employees",
    "51–200 employees",
    "201–500 employees",
    "500+ employees",
];

const PBX_REASONS = [
    { id: "To never miss a call to the company", label: "To never miss a call to the company" },
    { id: "To monitor employee performance", label: "To monitor employee performance" },
    { id: "For CRM integration", label: "For CRM integration" },
];

function SuccessState({ onClose }) {
    return (
        <div className="flex flex-col items-center justify-center py-8 text-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-primary">You're all set!</h3>
                <p className="text-sm text-muted-foreground mt-2 max-w-xs mx-auto">
                    We'll reach out within one business day to schedule your free consultation.
                </p>
            </div>
            <Button onClick={onClose} className="mt-2">
                Close
            </Button>
        </div>
    );
}

function ConsultationFormContent({ onClose }) {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        companyId: "",
        companyName: "",
        employees: "",
        reasons: [],
        comments: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const handleEmployees = (value) => {
        setFormData((prev) => ({ ...prev, employees: value }));
        if (errors.employees) setErrors((prev) => ({ ...prev, employees: "" }));
    };

    const toggleReason = (id) => {
        setFormData((prev) => ({
        ...prev,
        reasons: prev.reasons.includes(id)
            ? prev.reasons.filter((r) => r !== id)
            : [...prev.reasons, id],
        }));
    };

    const validate = () => {
        const e: Record<string, string> = {};
        if (!formData.name.trim()) e.name = "Name is required";
        if (!formData.phone.trim()) e.phone = "Phone is required";
        if (!formData.email.trim()) e.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = "Invalid email address";
        if (!formData.employees) e.employees = "Please select an option";
        return e;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length) { setErrors(errs); return; }

        setLoading(true);
        await fetch("/api/consultation", { method: "POST", body: JSON.stringify(formData) });
        await new Promise((r) => setTimeout(r, 1200));
        setLoading(false);
        setSubmitted(true);
    };

    if (submitted) return <SuccessState onClose={onClose} />;

    return (
        <form onSubmit={handleSubmit} noValidate className="space-y-4 mt-2">
            {/* Name */}
            <div className="space-y-1.5">
                <Input name="name" placeholder="Name" value={formData.name} onChange={handleChange} disabled={loading}
                    className={cn(errors.name && "border-destructive focus-visible:ring-destructive")}
                />
                {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
            </div>

            {/* Phone */}
            <div className="space-y-1.5">
                <Input name="phone" type="tel" placeholder="Phone" value={formData.phone} onChange={handleChange} disabled={loading}
                    className={cn(errors.phone && "border-destructive focus-visible:ring-destructive")}
                />
                {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
            </div>

            {/* Email */}
            <div className="space-y-1.5">
                <Input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} disabled={loading}
                    className={cn(errors.email && "border-destructive focus-visible:ring-destructive")}
                />
                {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
            </div>

            {/* Company Name */}
            <Input name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleChange} disabled={loading}/>

            {/* Website URL */}
            <Input name="companyId" placeholder="Website URL" value={formData.companyId} onChange={handleChange} disabled={loading}/>

            {/* Employees */}
            <div className="space-y-1.5">
                <Label className="text-sm font-medium">
                    How many employees will be using the Cloud PBX?
                </Label>
                <Select value={formData.employees} onValueChange={handleEmployees} disabled={loading}>
                    <SelectTrigger className={cn(errors.employees && "border-destructive focus:ring-destructive")}>
                        <SelectValue placeholder="Select an option from the list..." />
                    </SelectTrigger>
                    <SelectContent>
                        {EMPLOYEE_OPTIONS.map((o) => (
                            <SelectItem key={o} value={o}>{o}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                {errors.employees && <p className="text-xs text-destructive">{errors.employees}</p>}
            </div>

            {/* PBX Reasons */}
            <div className="space-y-2.5">
                <Label className="text-sm font-medium">Why do you need a Cloud PBX?</Label>
                {PBX_REASONS.map(({ id, label }) => (
                    <div key={id} className="flex items-center gap-3">
                        <Checkbox id={id} checked={formData.reasons.includes(id)} onCheckedChange={() => toggleReason(id)} disabled={loading}
                            className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                        />
                        <label htmlFor={id} className="text-sm text-muted-foreground cursor-pointer select-none leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            {label}
                    </label>
                </div>
                ))}
            </div>

            {/* Comments */}
            <Textarea name="comments" placeholder="Enter any questions and comments" value={formData.comments} onChange={handleChange} disabled={loading} rows={4} className="resize-none"/>

            {/* Submit */}
            <Button type="submit" disabled={loading} className="w-full py-6 text-base font-semibold">
                {loading ? (
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">   
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
            ) : (
                "Submit"
            )}
            </Button>
        </form>
    );

}

export default function ConsultationDialog({
    triggerLabel = "Get a Free Consultation",
    triggerClassName = "",
}) {
  const [open, setOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setOpen(true)} className={cn("font-semibold px-6", triggerClassName)}>
                {triggerLabel}
            </Button>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto sm:rounded-2xl">
                    <DialogHeader className="text-center space-y-2">
                        <DialogTitle className="text-center text-2xl font-bold text-primary leading-snug">
                            Get a Consultation and Free Trial
                        </DialogTitle>
                        <DialogDescription className="text-sm text-center leading-relaxed">
                            We will contact you within one business day.
                            <br />
                            Consultation and get a free 7 days trial.
                            {/* Consultation and trial are completely free. */}
                        </DialogDescription>
                    </DialogHeader>

                    <ConsultationFormContent onClose={() => setOpen(false)} />
                </DialogContent>
        </Dialog>
        </>
    );
}