import { Coloring } from './coloring';
import { Timestamp } from './timestamp';

export class Console {
	private static timestamp = Timestamp().formatted;

	static log(message: unknown, id = 'Adadas'): void {
		console.log(`[${this.timestamp}][${id}] - ${message}`);
	}

	static warn(message: unknown, id = 'Adadas'): void {
		console.log(
			Coloring.yellow(
				`[${this.timestamp}][${Coloring.reverse('WARN')}${Coloring.yellow()}][${id}] - ${message}`
			)
		);
	}

	static info(message: unknown, id = 'Adadas'): void {
		console.log(
			Coloring.blue(
				`[${this.timestamp}][${Coloring.reverse('INFO')}${Coloring.blue()}][${id}] - ${message}`
			)
		);
	}

	static error(message: unknown, id = 'Adadas'): void {
		console.log(
			Coloring.red(
				`[${this.timestamp}][${Coloring.reverse('ERROR')}${Coloring.red()}][${id}] - ${message}`
			)
		);
	}

	static ready(message: unknown, id = 'Adadas'): void {
		console.log(
			Coloring.green(
				`[${this.timestamp}][${Coloring.reverse('READY')}${Coloring.green()}][${id}] - ${message}`
			)
		);
	}
}
