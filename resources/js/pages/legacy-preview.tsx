import LegacyLayout from '@/layouts/legacy-layout';
import { Head } from '@inertiajs/react';

export default function LegacyPreview() {
    return (
        <LegacyLayout>
            <Head title="Legacy Preview" />
            <h1 className="text-3xl font-bold">Legacy Layout Preview</h1>
            <p className="mt-4 text-white/80">This page is rendered using the legacy Blade-based layout, now in React.</p>
        </LegacyLayout>
    );
}
